# ExploreXT

ExploreXT is an online text file manager. It's a single-user application accessible with a 4 digit pin.

## Application

[This](designs/main.png) is how the main application looks. In the left sidebar, there is a directory tree that expands all the folders inside on folder click and shows files stored in that folder on the right.

There are clickable breadcrumbs on top, which show the current folder path.

A new file/folder can be created in the selected folder by clicking the plus button on the top right. Plus button click opens a dropdown showing option to create a file or folder. After selecting file/folder a dialog pops-up as shown [here](designs/create-file-or-folder.png).

Clicking the file opens a [dialog](designs/edit-file.png) to update the content of that file.

Users can [search](designs/search.png) files in a folder with file name or content.

The lock button blurs and locks the screen as shown [here](designs/locked.png), which can only be unlocked after the correct pin is entered. When the application is opened for the first time, the screen is locked by default.

## Assets

All the icons used in the application can be found in the `assets` directory and the colors can be picked from [palette](designs/palette.png).

## Stack

- Front-end: [ReactJS](https://reactjs.org/)
- You should write any logic in frontend only (using localstorage, sessionstorage or anything else)

> All [NPM](https://www.npmjs.com/) packages having more than 100,000 weekly downloads are allowed.

## Deliverables

- Check the file "tasks-frontend.txt" for all the tasks, evaluation criteria & deliverables
