jsmake.desc('Bumps the package version for next release.');
jsmake.task('bump', function (argv) {
    jsmake.utils.packageJsonVersionBump('./package.json', argv.type || 'patch')
        .then((version) => {
            console.log('Bumped to version ' + version + '.');
        });
});

jsmake.tasks.bump.parameters.setRule(
    'type',
    {
        type: String,
        description: 'Increment type [major, minor, patch, premajor, preminor, prepatch or prerelease]'
    }
);

jsmake.desc('Publishes package to npm.');
jsmake.task('publish', function (argv) {
    jsmake.utils.npmPublish();
});

jsmake.desc('Reinstalls dependencies from npm.');
jsmake.task('deps', function (argv) {
    jsmake.utils.fs.rmdirP('node_modules')
        .then(() => {
            jsmake.utils.os.shell('npm install');
        });
});

jsmake.desc('Builds the source code.');
jsmake.task('build', function (argv) {
    jsmake.utils.os.shell('tsc');
});
