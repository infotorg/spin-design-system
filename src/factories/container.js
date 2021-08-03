import { mergeData } from 'vue-functional-data-merge';

export default (Component, name, options = {}, styles = {}) => ({
    ...options,
    name,
    functional: true,
    render(h, context) {
        const componentData = {
            class: {
                [styles.root]: styles,
            },
        };

        return h(
            Component,
            {
                props: context.props,
                slots: context.slots(),
                scopedSlots: context.scopedSlots,
                data: mergeData(context.data, componentData),
                parent: context.parent,
                class: [context.data.class, context.data.staticClass],
                style: context.data.style,
                attrs: context.data.attrs,
                on: context.listeners,
                ref: context.data.ref,
                directives: context.data.directives || []
            },
            context.children
        );
    },
});
