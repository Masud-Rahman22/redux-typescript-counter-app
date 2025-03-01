const Logger = (state) => (next) => (action) => {
    console.log('previous state => ', state.getState())
    console.log('action =>', action)
    next(action)
    console.log('next state =>', state.getState())
}

export default Logger;