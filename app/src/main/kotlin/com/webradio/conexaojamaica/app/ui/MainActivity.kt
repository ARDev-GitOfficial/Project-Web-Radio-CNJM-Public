package com.webradio.conexaojamaica.app.ui

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.webradio.conexaojamaica.app.data.RadioConfig
import com.webradio.conexaojamaica.app.playback.PlaybackState
import com.webradio.conexaojamaica.app.privacy.PrivacySummary

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PublicSkeletonApp()
        }
    }
}

@Composable
fun PublicSkeletonApp() {
    var playback by remember { mutableStateOf(PlaybackState()) }

    MaterialTheme {
        Surface(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFF10130F)),
            color = Color(0xFF10130F)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(20.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Text(
                    text = RadioConfig.STATION_NAME,
                    color = Color.White,
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "Public Android skeleton with placeholder playback and safe configuration.",
                    color = Color(0xFFD8E0D0)
                )

                Card(shape = RoundedCornerShape(8.dp)) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        Text("Playback state", fontWeight = FontWeight.SemiBold)
                        Text(if (playback.isPlaying) "Playing sample stream" else "Paused")
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            Button(onClick = { playback = playback.copy(isPlaying = true) }) {
                                Text("Play")
                            }
                            Button(onClick = { playback = playback.copy(isPlaying = false) }) {
                                Text("Pause")
                            }
                        }
                    }
                }

                VisualizerPreview(isActive = playback.isPlaying)

                Card(shape = RoundedCornerShape(8.dp), modifier = Modifier.fillMaxWidth()) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("Privacy-aware defaults", fontWeight = FontWeight.SemiBold)
                        PrivacySummary.publicNotes.forEach { note ->
                            Text("- $note")
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun VisualizerPreview(isActive: Boolean) {
    val bars = if (isActive) listOf(0.4f, 0.8f, 0.55f, 1f, 0.7f) else List(5) { 0.2f }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(88.dp),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        bars.forEachIndexed { index, level ->
            Spacer(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxSize(level)
                    .background(
                        color = listOf(
                            Color(0xFF26E07F),
                            Color(0xFFF5C542),
                            Color(0xFFE94D4D)
                        )[index % 3],
                        shape = RoundedCornerShape(6.dp)
                    )
            )
        }
    }
}
