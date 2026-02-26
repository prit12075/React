let CurrentTime = () => {
  let time = new Date();
  return <p>This the the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default CurrentTime