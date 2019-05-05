
function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("main-page");
}

exports.onTap = onTap;