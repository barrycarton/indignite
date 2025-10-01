# Sound Files

This directory contains sound files that play when cards are clicked.

## Default Sound

The default sound file is `indignite.mp3`. If this file doesn't exist, the website will fall back to using the Web Audio API to generate a sound.

## Adding Custom Sounds

To add a custom sound:

1. Place your `.mp3` file in this directory
2. Update the `sound` field in `data.json` to reference your file:
   ```json
   {
     "text": "Your phrase",
     "description": "Your description",
     "sound": "sounds/your-sound.mp3"
   }
   ```

## Recommended Format

- Format: MP3
- Sample Rate: 44.1 kHz
- Bit Rate: 128 kbps or higher
- Duration: 0.5 - 2 seconds for best user experience
- Volume: Normalized to -3dB to prevent clipping

## Note

Sound files are optional. If a sound file cannot be loaded, the website will automatically use a synthesized sound as a fallback.
