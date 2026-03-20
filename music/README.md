# 🎵 音乐播放器使用说明

## 快速开始

### 1. 添加音乐文件

将您的 MP3 音乐文件放入 `music` 文件夹中，例如：
- `music/qifengle.mp3`
- `music/shaonian.mp3`
- `music/yekong.mp3`

### 2. 配置播放列表

编辑 `js/music-player.js` 文件，修改 `playlist` 数组：

```javascript
const MusicPlayer = {
    playlist: [
        {
            title: "歌曲名称",
            artist: "歌手",
            src: "music/您的文件.mp3",  // 音乐文件路径
            icon: "🎤"  // 表情符号图标
        },
        // 添加更多歌曲...
    ]
};
```

### 3. 在页面中引入

在 HTML 页面的 `</body>` 标签前添加：

```html
<link rel="stylesheet" href="css/music-player.css">
<script src="js/music-player.js"></script>
```

## 功能特点

✅ **播放/暂停控制** - 点击右下角音乐按钮
✅ **播放列表** - 点击按钮显示完整列表，可选择歌曲
✅ **音量调节** - 滑动音量条调节音量
✅ **自动播放下一首** - 当前歌曲结束后自动播放下一首
✅ **精美动画效果** - 播放时按钮动画、均衡器效果
✅ **响应式设计** - 支持手机和电脑

## 控制说明

| 操作 | 功能 |
|------|------|
| 点击 🎵 按钮 | 播放/暂停音乐，显示播放列表 |
| 点击 × | 关闭播放列表 |
| 点击歌曲 | 播放指定歌曲 |
| 拖动音量条 | 调节音量大小 |

## 推荐歌曲列表

| 歌曲名 | 歌手 | 文件名建议 |
|--------|------|-----------|
| 起风了 | 买辣椒也用券 | qifengle.mp3 |
| 少年 | 梦然 | shaonian.mp3 |
| 夜空中最亮的星 | 逃跑计划 | yekong.mp3 |
| 晴天 | 周杰伦 | qingtian.mp3 |
| 后来 | 刘若英 | houlai.mp3 |
| 那些花儿 | 朴树 | naxiehuaer.mp3 |
| 同桌的你 | 老狼 | tongzhuo.mp3 |
| 北京东路的日子 | 毕业歌 | beijingdonglu.mp3 |
| 祝你一路顺风 | 吴奇隆 | yilushunfeng.mp3 |
| 光阴的故事 | 罗大佑 | guangyindegs.mp3 |

## 常见问题

**Q: 音乐无法播放？**
A: 检查音乐文件路径是否正确，确保文件存在于 `music` 文件夹中。

**Q: 如何添加更多歌曲？**
A: 在 `js/music-player.js` 的 `playlist` 数组中添加新的歌曲对象即可。

**Q: 如何修改音量？**
A: 点击音乐按钮打开播放列表，拖动底部的音量条即可。
