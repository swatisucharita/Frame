import React from 'react';

export default class MicroFrontend extends React.Component {
    componentDidMount(){
        const { name, host } = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = 'anonymous';
        script.type= 'module';
        script.src = `${host}/index.js`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
    }
    renderMicroFrontend = () => {
        console.log("onload");
        const { name } = this.props;

        const root = document.querySelector(`#${name}-container`);
        const listComponent = document.createElement(`${name}-list`);
        root.appendChild(listComponent);
    };
    render() {
        return <div />;
    }
}