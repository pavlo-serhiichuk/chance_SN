import MainApp from "./App";
import ReactDOM from 'react-dom';

it('App render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainApp />, div)
    ReactDOM.unmountComponentAtNode(div)
})