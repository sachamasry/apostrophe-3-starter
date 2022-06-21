// modules/@apostrophecms/form/index.js
module.exports = {
    options: {
        formWidgets: {
            '@apostrophecms/form-text-field': {},
            '@apostrophecms/form-textarea-field': {},
            '@apostrophecms/form-boolean-field': {},
            '@apostrophecms/form-select-field': {},
            '@apostrophecms/form-radio-field': {},
            '@apostrophecms/form-checkboxes-field': {},
            '@apostrophecms/form-conditional': {},
            '@apostrophecms/rich-text': {
                toolbar: [
                    'styles', 'bold', 'italic', 'link',
                    'orderedList', 'bulletList'
                ]
            }
        },
        classPrefix: 'mp-form',
        emailSubmissions: true
    }
};
