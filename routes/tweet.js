const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  res.send("특정 트윗 조회");
});

router.post("/", (req, res) => {
  res.send("게시물 생성");
});

router.put("/:id", (req, res) => {
  res.send("게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("게시물 삭제");
});

module.exports = router;
