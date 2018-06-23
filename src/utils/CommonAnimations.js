import {keyframes} from 'styled-components';

export const float = keyframes`
50% {
transform: translateY(4px);
}
`;


export const expandable = keyframes`
0% {
    opacity: 0.8;
    top: 600px;
}
100% {
    opacity: 1;
    top: 0;
}
`;