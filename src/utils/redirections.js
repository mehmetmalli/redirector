const Realm = require('realm');

const Redirection = {
    name: 'Redirection',
    properties: {
        key: 'string',
        target: 'string'
    },
    primaryKey: 'key',
};

const getAllRedirections = async () => {
    const realm = await Realm.open({
        schema: [Redirection]
    });
    return { realm, redirections: realm.objects('Redirection') };
}

(async () => {
    const { redirections } = await getAllRedirections();

    redirections.addListener((rows) => {
        console.log('---------------------------------------------');
        rows.forEach(({ key, target }) => {
            console.log(key, ' => ', target);
        });
    })
})();

module.exports = { getAllRedirections };