const audioContext = new AudioContext();

export function playBeep(duration: number, frequency: number) {
  const oscillatorNode = new OscillatorNode(audioContext, {
    type: "sine",
    frequency: frequency,
  });

  const currentTime = audioContext.currentTime;
  oscillatorNode.connect(audioContext.destination);
  oscillatorNode.start(currentTime);
  oscillatorNode.stop(currentTime + duration);
}
