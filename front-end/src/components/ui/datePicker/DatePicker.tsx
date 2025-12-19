import { useState, useEffect } from 'react'
import Icon from '../icon/Icon'

export function DatePicker() {
    const today = new Date() // 오늘 날짜
    const [year, setYear] = useState(String(today.getFullYear()).padStart(4, '0')) // today 년도
    const [month, setMonth] = useState(String(today.getMonth() + 1).padStart(2, '0')) // today 월
    const [day, setDay] = useState(String(today.getDate()).padStart(2, '0')) // today 일
    const [calendarPanelState, setCalendarPanelState] = useState(false) // 달력 패널 상태
    const [calendarMonthsState, setCalendarMonthsState] = useState(false) // 패널 속 달 선택 레이어 상태
    const numericYear = Number(year)
    const numericMonth = Number(month)
    const [visibleYears, setVisibleYears] = useState<number[]>([])
    const [activeYear, setActiveYear] = useState<number>(numericYear)

    useEffect(() => {
        const baseYear = numericYear
        const range = 3
        const years: number[] = []

        for (let i = -range; i <= range; i++) {
            years.push(baseYear + i)
        }
        setVisibleYears(years)
        setActiveYear(baseYear)
    }, [numericYear])

    /**
     * 날짜 계산시 필요한 것
     * 이번달이 몇일까지 있는지
     * 1일이 무슨 요일인지
     * 1일 이전, 마지막일 다음으로 몇칸을 채워야하는지
     */

    /**
     * @param year
     * @param month
     * 달의 1일이 무슨 요일인지 구하기
     * 반환값 0: 일요일 / 1: 월요일 / 2: 화요일 / 3: 수요일 / 4: 목요일 / 5: 금요일 / 6: 토요일
     */
    function getDayOfWeekIndexOfFirstDate(year: number, month: number): number {
        const firstDateOfMonth = new Date(year, month - 1, 1)
        return firstDateOfMonth.getDay()
    }

    /**
     * @param year
     * @param month
     * 달의 마지막 날짜 구하기
     */
    function getLastDateOfMonth(year: number, month: number): number {
        const lastDateOfMonth = new Date(year, month, 0)
        return lastDateOfMonth.getDate()
    }

    /**
     * 달력 칸 만들기
     * 7일 x 6주 = 42칸
     */
    type CalendarDateCell = {
        date: number | null
        isCurrentMonth: boolean
    }

    /**
     * @param year
     * @param month
     * 날짜 배열 생성 함수
     */
    function createCalendarDateCells(year: number, month: number): CalendarDateCell[] {
        const dayOfWeekIndexOfFirstDate = getDayOfWeekIndexOfFirstDate(year, month)
        const lastDateOfCurrentMonth = getLastDateOfMonth(year, month)
        const lastDateOfPreviousMonth = getLastDateOfMonth(
            month === 1 ? year - 1 : year,
            month === 1 ? 12 : month - 1,
        )
        const totalRequiredCells = dayOfWeekIndexOfFirstDate + lastDateOfCurrentMonth
        const calendarCellCount = totalRequiredCells > 35 ? 42 : 35
        const calendarDateCells: CalendarDateCell[] = []

        // 1일 이전, 이전달 날짜 채우기
        for (let i = dayOfWeekIndexOfFirstDate - 1; i >= 0; i--) {
            calendarDateCells.push({
                date: lastDateOfPreviousMonth - i,
                isCurrentMonth: false,
            })
        }
        // 현재 달 날짜 채우기
        for (let date = 1; date <= lastDateOfCurrentMonth; date++) {
            calendarDateCells.push({
                date,
                isCurrentMonth: true,
            })
        }
        // 현재 달 마지막 날 이후, 다음달 날짜 채우기
        let nextMonthDate = 1
        while (calendarDateCells.length < calendarCellCount) {
            calendarDateCells.push({
                date: nextMonthDate,
                isCurrentMonth: false,
            })
            nextMonthDate++
        }
        return calendarDateCells
    }

    const calendarDateCells = createCalendarDateCells(
        numericYear,
        numericMonth
    )

    function onlyNumber(value: string) {
        return value.replace(/\D/g, '')
    }

    function clamp(num: number, min: number, max: number) {
        return Math.min(max, Math.max(min, num))
    }

    function pad(value: number, length: number) {
        return String(value).padStart(length, '0')
    }

    function createNumberHandlers({
        value,
        setValue,
        min,
        max,
        maxLength,
    }: {
        value: string
        setValue: (val: string) => void
        min: number
        max: number
        maxLength: number
    }) {
        return {
            onChange(e: React.ChangeEvent<HTMLInputElement>) {
                const val = onlyNumber(e.target.value).slice(0, maxLength)
                setValue(val)
            },
            onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
                if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
                e.preventDefault()
                const current = value === '' ? min : Number(value)
                const next =
                    e.key === 'ArrowUp'
                        ? clamp(current + 1, min, max)
                        : clamp(current - 1, min, max)
                setValue(pad(next, maxLength))
            },
            onBlur() {
                if (value === '') return
                const num = clamp(Number(value), min, max)
                setValue(pad(num, maxLength))
            },
        }
    }

    return (
        <div className="form-element custom-input-date">
            <div className="date-picker">
                <input
                    type="text"
                    id="DP_YEAR"
                    className="year"
                    aria-label="년도"
                    maxLength={4}
                    value={year}
                    {...createNumberHandlers({
                        value: year,
                        setValue: setYear,
                        min: 0,
                        max: 9999,
                        maxLength: 4,
                    })}
                />
                .
                <input
                    type="text"
                    id="DP_MONTH"
                    className="month"
                    aria-label="월"
                    maxLength={2}
                    value={month}
                    {...createNumberHandlers({
                        value: month,
                        setValue: setMonth,
                        min: 1,
                        max: 12,
                        maxLength: 2,
                    })}
                />
                .
                <input
                    type="text"
                    id="DP_DAY"
                    className="day"
                    aria-label="일"
                    maxLength={2}
                    value={day}
                    {...createNumberHandlers({
                        value: day,
                        setValue: setDay,
                        min: 1,
                        max: 31,
                        maxLength: 2,
                    })}
                />
                .
                <button
                    type="button"
                    className="handle-calendar-open"
                    aria-expanded={calendarPanelState}
                    onClick={() => setCalendarPanelState((s) => !s)}
                >
                    <Icon name="calendarDay" width={16} height={16} fill="#ec0044" />
                    <span>달력UI열기</span>
                </button>
                <div
                    className={`calendar-panel ${calendarPanelState ? 'is-open' : ''}`}
                    aria-hidden={!calendarPanelState}
                >
                    <div className="calendar-panel-header">
                        <div className="header-left">
                            <button
                                type="button"
                                className="handle-months-open"
                                onClick={() => setCalendarMonthsState((s) => !s)}
                            >
                                <span>년도,월선택</span>
                                {year}년 {month}월
                                <Icon name="grid" width={12} height={12} fill="#999" />
                            </button>
                        </div>
                        <div className="header-right">
                            <button type="button" className="handle-month prev">
                                <span>이전달</span>
                                <Icon name="angleLeft" width={16} height={16} fill="#999" />
                            </button>
                            <button type="button" className="handle-month next">
                                <span>다음달</span>
                                <Icon name="angleRight" width={16} height={16} fill="#999" />
                            </button>
                        </div>
                    </div>
                    <div className="calendar-panel-body">
                        {/**
                         날짜 버튼 클릭시 초기 보여질 달력화면
                         */}
                        <div className={`calendar-days ${calendarMonthsState ? 'is-close' : ''}`}>
                            <ul className="weekly">
                                <li>일</li>
                                <li>월</li>
                                <li>화</li>
                                <li>수</li>
                                <li>목</li>
                                <li>금</li>
                                <li>토</li>
                            </ul>
                            <ul className="daily">
                                {calendarDateCells.map((cell, index) => {
                                    if (!cell.date) {
                                        return (
                                            <li key={index}>
                                                <span aria-hidden="true" />
                                            </li>
                                        )
                                    }
                                    const dayOfWeekIndex = new Date(
                                        Number(year),
                                        Number(month) - 1,
                                        cell.date,
                                    ).getDay()

                                    const weekDayName = ['일', '월', '화', '수', '목', '금', '토'][
                                        dayOfWeekIndex
                                        ]

                                    return (
                                        <li key={index}>
                                            <button
                                                type="button"
                                                aria-label={`${year}년 ${month}월 ${cell.date}일 ${weekDayName}요일`}
                                            >
                                                {cell.date}
                                            </button>
                                        </li>
                                    )
                                })}
                                {/*<li>
                                    <button type="button">1</button>
                                </li>
                                <li>
                                    <button type="button">2</button>
                                </li>
                                <li>
                                    <button type="button">3</button>
                                </li>
                                <li>
                                    <button type="button">4</button>
                                </li>
                                <li>
                                    <button type="button">5</button>
                                </li>
                                <li>
                                    <button type="button">6</button>
                                </li>
                                <li>
                                    <button type="button">7</button>
                                </li>
                                <li>
                                    <button type="button">8</button>
                                </li>
                                <li>
                                    <button type="button">9</button>
                                </li>
                                <li>
                                    <button type="button">10</button>
                                </li>
                                <li>
                                    <button type="button">11</button>
                                </li>
                                <li>
                                    <button type="button">12</button>
                                </li>
                                <li>
                                    <button type="button">13</button>
                                </li>
                                <li>
                                    <button type="button">14</button>
                                </li>
                                <li>
                                    <button type="button">15</button>
                                </li>
                                <li>
                                    <button type="button">16</button>
                                </li>
                                <li>
                                    <button type="button">17</button>
                                </li>
                                <li>
                                    <button type="button">18</button>
                                </li>
                                <li>
                                    <button type="button">19</button>
                                </li>
                                <li>
                                    <button type="button">20</button>
                                </li>
                                <li>
                                    <button type="button">21</button>
                                </li>
                                <li>
                                    <button type="button">22</button>
                                </li>
                                <li>
                                    <button type="button">23</button>
                                </li>
                                <li>
                                    <button type="button">24</button>
                                </li>
                                <li>
                                    <button type="button">25</button>
                                </li>
                                <li>
                                    <button type="button">26</button>
                                </li>
                                <li>
                                    <button type="button">27</button>
                                </li>
                                <li>
                                    <button type="button">28</button>
                                </li>
                                <li>
                                    <button type="button">29</button>
                                </li>
                                <li>
                                    <button type="button">30</button>
                                </li>
                                <li>
                                    <button type="button">31</button>
                                </li>
                                <li>
                                    <button type="button">1</button>
                                </li>
                                <li>
                                    <button type="button">2</button>
                                </li>
                                <li>
                                    <button type="button">3</button>
                                </li>
                                <li>
                                    <button type="button">4</button>
                                </li>*/}
                            </ul>
                        </div>
                        {/**
                         calendar-panel-header의 selectYM 버튼 클릭시 보여질 년도, 월 선택 화면
                         */}
                        <div className={`calendar-months ${calendarMonthsState ? 'is-open' : ''}`}>
                            <ul className="list-year">
                                {visibleYears.map((yearValue) => (
                                    <li
                                        key={yearValue}
                                        className={yearValue === activeYear ? 'is-active' : undefined}
                                    >
                                        <button
                                            type="button"
                                            className="handle-year"
                                            onClick={() => setActiveYear(yearValue)}
                                        >
                                            {yearValue}년
                                        </button>
                                        <ul className="list-month">
                                            {Array.form({ length: 12 }, (_, index) => {
                                                const monthValue = index + 1
                                                return (
                                                    <li key={monthValue}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setYear(String(yearValue))
                                                                setMonth(String(monthValue).padStart(2, '0'))
                                                                setCalendarMonthsState(false)
                                                            }}
                                                        >
                                                            {monthValue}월
                                                        </button>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                ))}
                                {/*<li>
                                    <button type="button" className="handle-year">
                                        2019년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2020년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2021년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2022년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2023년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2024년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li className="is-active">
                                    <button type="button" className="handle-year">
                                        2025년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2026년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2027년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2028년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2029년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="handle-year">
                                        2030년
                                    </button>
                                    <ul className="list-month">
                                        <li>
                                            <button type="button">1월</button>
                                        </li>
                                        <li>
                                            <button type="button">2월</button>
                                        </li>
                                        <li>
                                            <button type="button">3월</button>
                                        </li>
                                        <li>
                                            <button type="button">4월</button>
                                        </li>
                                        <li>
                                            <button type="button">5월</button>
                                        </li>
                                        <li>
                                            <button type="button">6월</button>
                                        </li>
                                        <li>
                                            <button type="button">7월</button>
                                        </li>
                                        <li>
                                            <button type="button">8월</button>
                                        </li>
                                        <li>
                                            <button type="button">9월</button>
                                        </li>
                                        <li>
                                            <button type="button">10월</button>
                                        </li>
                                        <li>
                                            <button type="button">11월</button>
                                        </li>
                                        <li>
                                            <button type="button">12월</button>
                                        </li>
                                    </ul>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className="calendar-panel-footer">
                        <div className="footer-left">
                            <button type="button" className="reset-date">
                                초기화
                            </button>
                        </div>
                        <div className="footer-right">
                            <button type="button" className="reset-today">
                                오늘
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
