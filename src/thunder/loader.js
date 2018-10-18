import Component from '../index';

export default function loadProperties(callback, withProps = false) {
    if (withProps) {
        return import('./props').then(function ({ default: props }) {
            Component.editProps = props;
            callback(Component);
        })
    }
    callback(Component);

}