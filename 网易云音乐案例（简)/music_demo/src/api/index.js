// 统一导出接口供外部使用
import {recommendSong,latestMusic} from "./home"
import {hotWord,searchSong} from "./search"
import {getSongById,getLyricById} from "./play"

// 推荐歌单的api
export const recommendSongList = recommendSong

// 最新音乐api
export const latestMusicList = latestMusic

// // 热搜关键词
export const hotKeyword = hotWord

// 搜索信息
export const searchSongList = searchSong

// 播放页 - 获取歌曲详情
export const getSongByIdAPI = getSongById

// 播放页 - 获取歌词
export const getLyricByIdAPI = getLyricById