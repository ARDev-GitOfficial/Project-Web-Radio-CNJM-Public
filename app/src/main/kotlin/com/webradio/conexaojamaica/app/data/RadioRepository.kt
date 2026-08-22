package com.webradio.conexaojamaica.app.data

data class NowPlaying(
    val title: String,
    val artist: String,
    val album: String?,
    val isLive: Boolean
)

data class ScheduleSlot(
    val day: String,
    val timeRange: String,
    val program: String,
    val host: String
)

data class PublicAd(
    val id: String,
    val title: String,
    val placement: String
)

interface NowPlayingDataSource {
    suspend fun fetchNowPlaying(): NowPlaying
}

interface ScheduleDataSource {
    suspend fun fetchSchedule(): List<ScheduleSlot>
}

interface AdsDataSource {
    suspend fun fetchAds(): List<PublicAd>
}

class MockRadioRepository : NowPlayingDataSource, ScheduleDataSource, AdsDataSource {
    override suspend fun fetchNowPlaying(): NowPlaying =
        NowPlaying(
            title = "Programacao ao vivo",
            artist = RadioConfig.STATION_NAME,
            album = null,
            isLive = true
        )

    override suspend fun fetchSchedule(): List<ScheduleSlot> =
        listOf(
            ScheduleSlot(
                day = "Segunda",
                timeRange = "08:00 - 12:00",
                program = "Faixa publica de exemplo",
                host = RadioConfig.STATION_NAME
            ),
            ScheduleSlot(
                day = "Sexta",
                timeRange = "18:00 - 22:00",
                program = "Especial musical de exemplo",
                host = RadioConfig.STATION_NAME
            )
        )

    override suspend fun fetchAds(): List<PublicAd> =
        listOf(
            PublicAd(
                id = "sample-banner",
                title = "Espaco publicitario demonstrativo",
                placement = "home"
            )
        )
}
