package com.webradio.conexaojamaica.app.playback

import com.webradio.conexaojamaica.app.data.RadioConfig

data class PlaybackState(
    val streamUrl: String = RadioConfig.STREAM_URL,
    val isPlaying: Boolean = false,
    val buffering: Boolean = false,
    val errorMessage: String? = null
)

interface AudioPlayer {
    fun play()
    fun pause()
    fun release()
}

class PublicSkeletonAudioPlayer : AudioPlayer {
    override fun play() = Unit
    override fun pause() = Unit
    override fun release() = Unit
}
