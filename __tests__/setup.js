const originalError = console.error;

console.error = (message) => {
  if (!isNotAndIgnoredMessage(message)) {
    originalError.call(console, message);
  }
};

function isNotAndIgnoredMessage(message) {
  return message.startsWith('Warning: View.propTypes has been deprecated');
}
