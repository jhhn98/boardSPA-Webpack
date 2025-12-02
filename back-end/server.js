import express from "express"
import { db } from "./db.js"

const app = express()
app.use(express.json())

// 기본 테스트용
app.get("/posts", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM posts ORDER BY id DESC")
    res.json(rows)
})
// GET 전체 목록
app.get("/posts/:id", async (req, res) => {
    const [rows] = await db.query(
        "SELECT * FROM posts WHERE id = ?",
        [req.params.id]
    )
    res.json(rows[0])
})
// POST 생성
app.post("/posts", async (req, res) => {
    const { title, content, author } = req.body
    const [result] = await db.query(
        "INSERT INTO posts (title, content, author) VALUES (?,?,?)",
        [title, content, author]
    )
    res.json({ id: result.insertId })
})
// PUT 수정
app.put("/posts/:id", async (req, res) => {
    const { title, content } = req.body
    await db.query(
        "UPDATE posts SET title = ?, content = ? WHERE id = ?",
        [title, content, req.params.id]
    )
    res.json({ success: true })
})
// DELETE 삭제
app.delete("/posts/:id", async (req, res) => {
    await db.query("DELETE FROM posts WHERE id = ?", [req.params.id])
    res.json({ success: true })
})
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000")
})