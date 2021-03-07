# Enigma simulator

This repository contains [Enigma](https://en.wikipedia.org/wiki/Enigma_machine) cipher device simulator implemented in JavaScript simply for fun.
It's preconfigured to use rotors (I,II,III) and reflector (B) from the original 1939 Enigma.

You can play with it yourself at https://bajena.github.io/enigma/index.html.

## Encoding messages
In order to encode the secret message:
1. Choose your configuration for rotors (letters in the top-left corner).
2. Connect cables of the plugboard the wya you want.
3. Type your message
4. Your encoded text will appear on the white stripe in the top-right corner.

![ezgif-7-dbb9a0f67a17](https://user-images.githubusercontent.com/5732023/110254159-37039f80-7f8e-11eb-8c36-161711491290.gif)

## Decoding messages
If you have a secret text and want to decode it:
1. Choose the same rotor configuration as the one used when encoding the text.
2. Connect cables on the plugboard in the same way as when encoding.
3. Enter the ciphered message.
4. The decoded text will appear on the white stripe in the top-right corner.

![ezgif-1-28155b0cf77b](https://user-images.githubusercontent.com/5732023/110254208-80ec8580-7f8e-11eb-9150-4b8eb05f8bb9.gif)
