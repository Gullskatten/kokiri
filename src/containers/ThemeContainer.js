import { Container } from 'unstated';
import defaultTheme from '../utils/theme';
import sunset from '../utils/theme.sunset';
import dark from '../utils/theme.dark';
import sprinkels from '../utils/theme.dark';

export default class ThemeContainer extends Container {
    state = {
        selectedTheme: JSON.parse(window.localStorage.getItem("theme")) || defaultTheme,
        themes: [defaultTheme, sunset, dark]
    }

    changeTheme = theme => {
        this.setState({
            selectedTheme: theme
        });

        window.localStorage.setItem("theme", JSON.stringify(theme));
    }

}