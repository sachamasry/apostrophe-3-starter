// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
    options: {
        types: [
            {
                name: 'default-page',
                label: 'Default'
            },
            {
                name: 'private-page',
                label: 'Private, non-indexed page'
            },
            {
                name: '@apostrophecms/home-page',
                label: 'Home'
            },
            {
                name: 'custom-search-page',
                label: 'Search',
            },
            {
                name: 'article-page',
                label: 'Article page'
            },
            // Adding the event page type
            {
                name: '@apostrophecms/event',
                label: 'Event Page'
            },
            {
                name: 'author-page',
                label: 'Author page'
            },
            {
                name: 'tag-page',
                label: 'Tag page'
            },
            {
                name: 'topic-page',
                label: 'Topic page'
            },
            {
                name: 'notifications-page',
                label: 'Notification page'
            },
            {
                name: 'reusable-content-page',
                label: 'Reusable content page'
            },
            {
                name: 'website-section-page',
                label: 'Website sectioning page'
            },
            // Adding the blog page type
            {
                name: '@apostrophecms/blog-page',
                label: 'Blog Page'
            }
        ]
    }
};
