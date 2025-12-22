import { useEffect, useState, useRef } from 'react'
import Icon from '../icon/Icon'

/**
 * export default function ... 과 export function ...의 차이점
 *
 * export default function은 파일당 하나의 기본 export만 가능하며,
 * import 시 이름을 자유롭게 지정할 수 있어 사용은 편하지만
 * 이름 변경이 감지되지 않아 추적과 리팩토링이 어려울 수 있다.
 *
 * 반면 export function(named export)은 한 파일에 여러 export가 가능하고
 * import 시 이름이 강제되어 검색, 자동완성, 리팩토링에 유리하다.
 * 다만 import 시 중괄호를 사용해야 하는 번거로움이 있다.
 */
export function DatePicker() {
    const today = new Date() // 오늘 날짜
    const calendarMonthsRef = useRef<HTMLDivElement | null>(null)
    const isPrependingYearsRef = useRef(false)
    const calendarOpenButtonRef = useRef<HTMLButtonElement | null>(null)
    const calendarPanelRef = useRef<HTMLDivElement | null>(null)

    const [year, setYear] = useState(String(today.getFullYear()).padStart(4, '0')) // today 년도
    const [month, setMonth] = useState(String(today.getMonth() + 1).padStart(2, '0')) // today 월
    const [day, setDay] = useState(String(today.getDate()).padStart(2, '0')) // today 일
    const [inputYear, setInputYear] = useState('') // 년도 input 초기화용 상태
    const [inputMonth, setInputMonth] = useState('') // 월 input 초기화용 상태
    const [inputDay, setInputDay] = useState('') // 일 input 초기화용 상태
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [calendarPanelState, setCalendarPanelState] = useState(false) // 달력 패널 상태
    const [calendarMonthsState, setCalendarMonthsState] = useState(false) // 패널 속 달 선택 레이어 상태
    const [visibleYears, setVisibleYears] = useState<number[]>([])

    const numericYear = Number(year)
    const numericMonth = Number(month)

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
    // esc 키로 패널 닫기
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && calendarPanelState) {
                setCalendarPanelState(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [calendarPanelState])
    // 패널 닫힐 때 패널 열기 버튼으로 포커스 복원
    useEffect(() => {
        if (!calendarPanelState) {
            calendarOpenButtonRef.current?.focus()
        }
    }, [calendarPanelState])
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
    type CalendarCell = {
        year: number
        month: number
        day: number
        isCurrentMonth: boolean
    }

    /**
     * @param year
     * @param month
     * 날짜 배열 생성 함수
     */
    function createCalendarDateCells(year: number, month: number): CalendarCell[] {
        const firstDayIndex = getDayOfWeekIndexOfFirstDate(year, month)
        const lastDateOfCurrentMonth = getLastDateOfMonth(year, month)
        const prevYear = month === 1 ? year - 1 : year
        const prevMonth = month === 1 ? 12 : month - 1
        const lastDateOfPrevMonth = getLastDateOfMonth(prevYear, prevMonth)
        const nextYear = month === 12 ? year + 1 : year
        const nextMonth = month === 12 ? 1 : month + 1
        const dayCells: CalendarCell[] = []

        // 1일 이전, 이전달 날짜 채우기
        for (let i = firstDayIndex - 1; i >= 0; i--) {
            dayCells.push({
                year: prevYear,
                month: prevMonth,
                day: lastDateOfPrevMonth - i,
                isCurrentMonth: false,
            })
        }
        // 현재 달 날짜 채우기
        for (let date = 1; date <= lastDateOfCurrentMonth; date++) {
            dayCells.push({
                year,
                month,
                day: date,
                isCurrentMonth: true,
            })
        }
        // 현재 달 마지막 날 이후, 다음달 날짜 채우기
        const totalDayCells = dayCells.length > 35 ? 42 : 35
        let nextMonthDate = 1
        while (dayCells.length < totalDayCells) {
            dayCells.push({
                year: nextYear,
                month: nextMonth,
                day: nextMonthDate++,
                isCurrentMonth: false,
            })
        }
        return dayCells
    }

    const calendarDateCells = createCalendarDateCells(numericYear, numericMonth)

    function onlyNumber(value: string) {
        return value.replace(/\D/g, '')
    }

    function clamp(num: number, min: number, max: number) {
        return Math.min(max, Math.max(min, num))
    }

    function pad(value: number, length: number = 2) {
        return String(value).padStart(length, '0')
    }

    function createNumberHandlers({
        value,
        setValue,
        min,
        max,
        maxLength,
        onValidCommit,
    }: {
        value: string
        setValue: (val: string) => void
        min: number
        max: number
        maxLength: number
        onValidCommit?: (val: string) => void
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
                onValidCommit?.(pad(next, maxLength))
            },
            onBlur() {
                if (value === '') return
                const num = clamp(Number(value), min, max)
                setValue(pad(num, maxLength))
                onValidCommit?.(pad(num, maxLength))
            },
        }
    }
    function handleYearScroll(e: React.UIEvent<HTMLDivElement>) {
        const target = e.currentTarget
        const isScrollTop = target.scrollTop <= 0
        const isScrollBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1

        if (isScrollBottom) {
            appendNextYears()
        }
        if (isScrollTop) {
            /* empty */
        }
    }
    function handleYearWheel(e: React.WheelEvent<HTMLDivElement>) {
        const container = e.currentTarget

        const isAtTop = container.scrollTop <= 0
        const isScrollingUp = e.deltaY < 0

        if (isAtTop && isScrollingUp) {
            if (isPrependingYearsRef.current) return
            isPrependingYearsRef.current = true

            prependPreviousYears()

            requestAnimationFrame(() => {
                isPrependingYearsRef.current = false
            })
        }
    }
    function prependPreviousYears() {
        const container = calendarMonthsRef.current
        if (!container) return

        const previousScrollHeight = container.scrollHeight

        setVisibleYears((previousYears) => {
            const firstYear = previousYears.at(0)
            if (firstYear === undefined) return previousYears

            return [firstYear - 1, ...previousYears]
        })

        requestAnimationFrame(() => {
            const newScrollHeight = container.scrollHeight
            const scrollDiff = newScrollHeight - previousScrollHeight
            container.scrollTop = scrollDiff
        })
    }
    function appendNextYears() {
        setVisibleYears((previousYears) => {
            const lastYear = previousYears.at(-1)
            if (lastYear === undefined) return previousYears

            return [...previousYears, lastYear + 1]
        })
    }
    function moveMonth(direction: 'prev' | 'next') {
        const currentYear = Number(year)
        const currentMonth = Number(month)
        const currentDay = Number(day)

        let newYear = currentYear
        let newMonth = direction === 'prev' ? currentMonth - 1 : currentMonth + 1

        if (newMonth === 0) {
            newMonth = 12
            newYear -= 1
        }
        if (newMonth === 13) {
            newMonth = 1
            newYear += 1
        }

        const lastDateOfNewMonth = getLastDateOfMonth(newYear, newMonth)
        const newDay = clamp(currentDay, 1, lastDateOfNewMonth)

        setYear(String(newYear).padStart(4, '0'))
        setMonth(String(newMonth).padStart(2, '0'))
        setDay(String(newDay).padStart(2, '0'))
    }
    function handleResetDate() {
        const today = new Date()

        setYear(String(today.getFullYear()).padStart(4, '0'))
        setMonth(String(today.getMonth() + 1).padStart(2, '0'))
        setDay(String(today.getDate()).padStart(2, '0'))
        // 셋팅 년, 월, 일은 오늘 기준으로 맞춰놓고

        setInputYear('')
        setInputMonth('')
        setInputDay('')
        // input은 비운다

        setSelectedDate(null)
        setCalendarPanelState(false)
    }
    function handleSelectToday() {
        const today = new Date()

        const yearValue = String(today.getFullYear())
        const monthValue = String(today.getMonth() + 1).padStart(2, '0')
        const dayValue = String(today.getDate()).padStart(2, '0')

        setYear(yearValue)
        setMonth(monthValue)
        setDay(dayValue)
        setInputYear(yearValue)
        setInputMonth(monthValue)
        setInputDay(dayValue)
        setSelectedDate(`${yearValue}-${monthValue}-${dayValue}`)
        setCalendarPanelState(false)
    }
    function handleSelectDay(cell: CalendarCell) {
        const year = String(cell.year)
        const month = String(cell.month).padStart(2, '0')
        const day = String(cell.day).padStart(2, '0')

        setYear(year)
        setMonth(month)
        setDay(day)

        setInputYear(year)
        setInputMonth(month)
        setInputDay(day)

        setSelectedDate(`${year}-${month}-${day}`)
        setCalendarPanelState(false)
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
                    value={inputYear}
                    placeholder={year}
                    {...createNumberHandlers({
                        value: inputYear,
                        setValue: setInputYear,
                        min: 0,
                        max: 9999,
                        maxLength: 4,
                        onValidCommit: (val) => setYear(val),
                    })}
                />
                .
                <input
                    type="text"
                    id="DP_MONTH"
                    className="month"
                    aria-label="월"
                    maxLength={2}
                    value={inputMonth}
                    placeholder={month}
                    {...createNumberHandlers({
                        value: inputMonth,
                        setValue: setInputMonth,
                        min: 1,
                        max: 12,
                        maxLength: 2,
                        onValidCommit: (val) => setMonth(val),
                    })}
                />
                .
                <input
                    type="text"
                    id="DP_DAY"
                    className="day"
                    aria-label="일"
                    maxLength={2}
                    value={inputDay}
                    placeholder={day}
                    {...createNumberHandlers({
                        value: inputDay,
                        setValue: setInputDay,
                        min: 1,
                        max: 31,
                        maxLength: 2,
                        onValidCommit: (val) => setDay(val),
                    })}
                />
                .
                <button
                    type="button"
                    className="handle-calendar-open"
                    ref={calendarOpenButtonRef}
                    aria-expanded={calendarPanelState}
                    onClick={() => setCalendarPanelState(true)}
                >
                    <Icon name="calendarDay" width={16} height={16} fill="#ec0044" />
                    <span>달력UI열기</span>
                </button>
                {calendarPanelState && (
                    <div
                        ref={calendarMonthsRef}
                        className={`calendar-panel ${calendarPanelState ? 'is-open' : ''}`}
                        role="dialog"
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
                                <button
                                    type="button"
                                    className="handle-month prev"
                                    onClick={() => moveMonth('prev')}
                                    aria-label="이전 달력 보기"
                                >
                                    <span>이전달</span>
                                    <Icon name="angleLeft" width={16} height={16} fill="#999" />
                                </button>
                                <button
                                    type="button"
                                    className="handle-month next"
                                    onClick={() => moveMonth('next')}
                                    aria-label="다음 달력 보기"
                                >
                                    <span>다음달</span>
                                    <Icon name="angleRight" width={16} height={16} fill="#999" />
                                </button>
                            </div>
                        </div>
                        <div className="calendar-panel-body">
                            {/**
                             날짜 버튼 클릭시 초기 보여질 달력화면
                             */}
                            <div
                                className={`calendar-days ${calendarMonthsState ? 'is-close' : ''}`}
                            >
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
                                        if (!cell.day) {
                                            return (
                                                <li key={index}>
                                                    <span aria-hidden="true" />
                                                </li>
                                            )
                                        }
                                        const dayOfWeekIndex = new Date(
                                            cell.year,
                                            cell.month - 1,
                                            cell.day,
                                        ).getDay()

                                        const weekDayName = [
                                            '일',
                                            '월',
                                            '화',
                                            '수',
                                            '목',
                                            '금',
                                            '토',
                                        ][dayOfWeekIndex]
                                        const cellDateString = `${cell.year}-${pad(cell.month)}-${pad(cell.day)}`
                                        const isSelectedDay = selectedDate === cellDateString
                                        const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
                                        const isToday =
                                            `${year}-${month}-${String(cell.day).padStart(2, '0')}` ===
                                            todayString
                                        const isSunday = dayOfWeekIndex === 0
                                        const isSaturday = dayOfWeekIndex === 6

                                        return (
                                            <li
                                                key={index}
                                                className={[
                                                    isSelectedDay ? 'is-selected' : undefined,
                                                    isToday ? 'is-today' : undefined,
                                                    isSunday ? 'is-sun' : undefined,
                                                    isSaturday ? 'is-sat' : undefined,
                                                ]
                                                    .filter(Boolean)
                                                    .join(' ')}
                                            >
                                                <button
                                                    type="button"
                                                    aria-label={`${year}년 ${month}월 ${cell.day}일 ${weekDayName}요일`}
                                                    onClick={() => handleSelectDay(cell)}
                                                >
                                                    {cell.day}
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
                            <div
                                ref={calendarMonthsRef}
                                className={`calendar-months ${calendarMonthsState ? 'is-open' : ''}`}
                                onScroll={handleYearScroll}
                                onWheel={handleYearWheel}
                            >
                                <ul className="list-year">
                                    {visibleYears.map((yearValue) => (
                                        <li
                                            key={yearValue}
                                            className={
                                                yearValue === activeYear ? 'is-active' : undefined
                                            }
                                        >
                                            <button
                                                type="button"
                                                className="handle-year"
                                                onClick={() => setActiveYear(yearValue)}
                                                aria-expanded={yearValue === activeYear}
                                            >
                                                {yearValue}년
                                            </button>
                                            <ul className="list-month">
                                                {Array.from(
                                                    { length: 12 },
                                                    (_: never, index: number) => {
                                                        const monthValue = index + 1
                                                        return (
                                                            <li
                                                                key={monthValue}
                                                                className={
                                                                    yearValue === Number(year) &&
                                                                    monthValue === Number(month)
                                                                        ? 'is-selected'
                                                                        : undefined
                                                                }
                                                            >
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setYear(String(yearValue))
                                                                        setMonth(
                                                                            String(
                                                                                monthValue,
                                                                            ).padStart(2, '0'),
                                                                        )
                                                                        setCalendarMonthsState(
                                                                            false,
                                                                        )
                                                                    }}
                                                                >
                                                                    {monthValue}월
                                                                </button>
                                                            </li>
                                                        )
                                                    },
                                                )}
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
                                <button
                                    type="button"
                                    className="reset-date"
                                    onClick={handleResetDate}
                                    aria-label="날짜 선택 닫기"
                                >
                                    닫기
                                </button>
                            </div>
                            <div className="footer-right">
                                <button
                                    type="button"
                                    className="reset-today"
                                    onClick={handleSelectToday}
                                    aria-label="오늘 날짜 선택"
                                >
                                    오늘
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
