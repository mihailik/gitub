import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

wipeUnexpectedTags();
const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

function wipeUnexpectedTags() {
    for (let i = 0; i < document.body.children.length; i++) {
        const elem = document.body.children[i];
        if (elem.tagName && !/script|style/i.test(elem.tagName)) {
            document.body.removeChild(elem);
            i--;
        }
    }
}