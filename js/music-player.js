/**
 * 音乐播放器 - 班级网站
 * 使用方法：在页面中引入此 JS 文件和 CSS 文件
 */

// 音乐配置
const MusicPlayer = {
    playlist: [
        {
            title: "起风了",
            artist: "买辣椒也用券",
            src: "music/起风了.mp3",
            icon: "🎤"
        },
        {
            title: "少年",
            artist: "梦然",
            src: "music/梦然 - 少年.mp3",
            icon: "🎸"
        },
        {
            title: "夜空中最亮的星",
            artist: "逃跑计划",
            src: "music/逃跑计划 - 夜空中最亮的星.mp3",
            icon: "⭐"
        },
        {
            title: "晴天",
            artist: "周杰伦",
            src: "music/周杰伦 - 晴天.mp3",
            icon: "🌤️"
        },
        {
            title: "稻香",
            artist: "周杰伦",
            src: "music/稻香 - 周杰伦.mp3",
            icon: "🌾"
        }
    ],
    
    currentTrackIndex: 0,
    isPlaying: false,
    audio: null,
    
    // 初始化播放器
    init: function() {
        this.createPlayer();
        this.audio = document.getElementById('audio-player');
        this.setupEventListeners();
        this.renderPlaylist();
        this.updateVolume();
    },
    
    // 创建播放器 HTML
    createPlayer: function() {
        const playerHTML = `
            <div class="music-player">
                <div class="playlist" id="playlist">
                    <div class="playlist-header">
                        <span class="playlist-title">🎵 播放列表</span>
                        <button class="playlist-close" id="playlist-close">×</button>
                    </div>
                    <div class="playlist-items" id="playlist-items"></div>
                    <div class="volume-control">
                        <span class="volume-icon" id="volume-icon">🔊</span>
                        <input type="range" class="volume-slider" id="volume-slider" min="0" max="100" value="70">
                    </div>
                </div>
                <button class="music-btn" id="music-btn" title="播放/暂停音乐">
                    <svg id="play-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    <svg id="pause-icon" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                </button>
            </div>
            <audio id="audio-player"></audio>
        `;
        
        document.body.insertAdjacentHTML('beforeend', playerHTML);
    },
    
    // 设置事件监听
    setupEventListeners: function() {
        const musicBtn = document.getElementById('music-btn');
        const playlist = document.getElementById('playlist');
        const playlistClose = document.getElementById('playlist-close');
        const volumeSlider = document.getElementById('volume-slider');
        const volumeIcon = document.getElementById('volume-icon');
        
        // 播放/暂停按钮
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePlay();
        });
        
        // 点击音乐按钮显示播放列表
        musicBtn.addEventListener('click', () => {
            if (!playlist.classList.contains('show')) {
                this.togglePlaylist();
            }
        });
        
        // 关闭播放列表
        playlistClose.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePlaylist();
        });
        
        // 音量控制
        volumeSlider.addEventListener('input', () => {
            this.updateVolume();
            this.updateVolumeIcon();
        });
        
        // 点击其他地方关闭播放列表
        document.addEventListener('click', (e) => {
            if (playlist.classList.contains('show') && 
                !playlist.contains(e.target) && 
                e.target !== musicBtn) {
                this.togglePlaylist();
            }
        });
        
        // 播放结束自动下一首
        this.audio.addEventListener('ended', () => {
            this.playNext();
        });
        
        // 错误处理
        this.audio.addEventListener('error', (e) => {
            console.log('音乐播放错误:', e);
            this.playNext();
        });
    },
    
    // 渲染播放列表
    renderPlaylist: function() {
        const playlistItems = document.getElementById('playlist-items');
        if (!playlistItems) return;
        
        playlistItems.innerHTML = '';
        this.playlist.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item' + (index === this.currentTrackIndex ? ' active' : '');
            item.onclick = () => this.playTrack(index);
            item.innerHTML = `
                <div class="playlist-item-icon">${track.icon}</div>
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${track.title}</div>
                    <div class="playlist-item-artist">${track.artist}</div>
                </div>
                ${index === this.currentTrackIndex && this.isPlaying ? `
                    <div class="playlist-item-playing">
                        <span></span><span></span><span></span><span></span>
                    </div>
                ` : ''}
            `;
            playlistItems.appendChild(item);
        });
    },
    
    // 播放指定曲目
    playTrack: function(index) {
        this.currentTrackIndex = index;
        const track = this.playlist[index];
        this.audio.src = track.src;
        
        console.log('尝试播放:', track.title, '路径:', track.src);
        
        this.audio.play().then(() => {
            console.log('播放成功');
            this.isPlaying = true;
            this.updateUI();
            this.renderPlaylist();
        }).catch(err => {
            console.error('播放失败:', err);
            alert('无法播放音乐，请检查：\n1. 音乐文件是否存在\n2. 文件名是否正确\n3. 尝试用本地服务器打开页面');
        });
    },
    
    // 切换播放/暂停
    togglePlay: function() {
        if (!this.audio.src) {
            this.playTrack(this.currentTrackIndex);
            return;
        }
        
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            this.audio.play().catch(err => console.log('播放失败:', err));
            this.isPlaying = true;
        }
        this.updateUI();
        this.renderPlaylist();
    },
    
    // 播放下一首
    playNext: function() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.playTrack(this.currentTrackIndex);
    },
    
    // 更新 UI
    updateUI: function() {
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const musicBtn = document.getElementById('music-btn');
        
        if (this.isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            musicBtn.classList.add('playing');
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            musicBtn.classList.remove('playing');
        }
    },
    
    // 切换播放列表
    togglePlaylist: function() {
        const playlist = document.getElementById('playlist');
        playlist.classList.toggle('show');
        if (playlist.classList.contains('show')) {
            this.renderPlaylist();
        }
    },
    
    // 更新音量
    updateVolume: function() {
        const volumeSlider = document.getElementById('volume-slider');
        if (this.audio && volumeSlider) {
            this.audio.volume = volumeSlider.value / 100;
        }
    },
    
    // 更新音量图标
    updateVolumeIcon: function() {
        const volumeSlider = document.getElementById('volume-slider');
        const volumeIcon = document.getElementById('volume-icon');
        if (volumeSlider && volumeIcon) {
            const volume = volumeSlider.value;
            if (volume == 0) {
                volumeIcon.textContent = '🔇';
            } else if (volume < 50) {
                volumeIcon.textContent = '🔉';
            } else {
                volumeIcon.textContent = '🔊';
            }
        }
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    MusicPlayer.init();
});
