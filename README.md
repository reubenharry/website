# reubenharry.github.io
personal website

The website is built using Hugo, with theme [cocoa](https://themes.gohugo.io/cocoa/). You can look
up Hugo documentation or the Cocoa-specific documentation for more on how to use it.

It's deployed by Travis CI (travis-ci.org; log in with your GitHub), which runs Hugo every time you
push to the repo and pushes the result to reubenharry.github.io.

# New posts

To make a new post do `hugo new blog/name-of-post.md`. Then edit
`content/blog/name-of-post.md` until you're happy with it; you can set
the date and whether it's a draft and stuff in the header.

You can check it out locally with `hugo server`, or `hugo server -D`
if you want to see draft posts as well, then go to
`http://localhost:1313` in your browser.

When you're happy, `git add` the new files, commit and push. Travis CI
will do the rest.