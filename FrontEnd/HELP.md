# [How to Use GitHub and  VS Code](https://code.visualstudio.com/docs/sourcecontrol/github#sourcecontrol-articles)

## Prerequisites

-   A GitHub account (create one [here](https://github.com/join))
-   VS Code (download it [here](https://code.visualstudio.com/download))


## Step 1: Setting up VS Code

To get started with the GitHub in VS Code, you'll need to install [Git](https://git-scm.com/download), [create a GitHub account](https://help.github.com/github/getting-started-with-github/signing-up-for-a-new-github-account) and install the [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension. 

Once you've installed the [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension, you'll need to sign in. Follow the prompts to authenticate with GitHub in the browser and return to VS Code.

![Extension Sign In](https://code.visualstudio.com/assets/docs/sourcecontrol/github/extension-signin.png)


## Step 2: Cloning a repository

Search for the **Clone Repository** button in the Source Control view (available when you have no folder open).

![Clone Repository button in the Source Control view](https://code.visualstudio.com/assets/docs/sourcecontrol/github/git-clone-button.png)


From the GitHub repository dropdown you can filter and pick the repository you want to clone locally.

![GitHub repository dropdown filtered on microsoft/vscode](https://code.visualstudio.com/assets/docs/sourcecontrol/github/github-repo-dropdown.png)


## Step 3: Make Changes and Commit Them

1.  Once you have cloned the repository, you can begin making changes to the files in VS Code.
2.  When you have made your changes, click the **Source Control** button in the left-hand menu 
3.  You will see a list of files that have been changed. Click the checkbox next to the files you want to commit.
4.  In the textbox at the top of the panel, type a brief description of the changes you made.
5.  Click the checkmark icon to commit your changes.

## Step 4: Push Changes to GitHub

1.  After committing your changes, click the `...` button in the top bar of the **Source Control** panel.
1.  Select **Push** from the dropdown menu.
2.  VS Code will push your changes to your forked repository on GitHub.


## Tips

Here are some general guidelines to consider:
1.  Commit frequently: It's generally a good practice to commit changes frequently, especially if you're working on a large project. Frequent commits make it easier to track changes and revert to a previous state if necessary.
2.  Keep commits small: Try to keep each commit small and focused on a single task or change. This makes it easier to understand what changed and why, and helps avoid merge conflicts. 
3.  Push regularly: Push your changes to the remote repository regularly, especially if you're working in a team or on a shared project. This ensures that everyone is working with the latest code and reduces the risk of conflicts.
4.  Use descriptive commit messages: Write clear and concise commit messages that describe the changes you made. This helps others understand your changes and makes it easier to search for specific changes later on.


--- 


# GitHub features
***Note:*** you can use this features also from inside VS Code.

## Issues

If you find any issues or bugs in this project, please let us know by creating a new issue in the Github repository. To create a new issue, go to the "Issues" tab at the top of the repository and click the "New Issue" button.


## Using Issues as Tasks

We use Github Issues to keep track of tasks that need to be done for this project. Each issue represents a single task or feature that needs to be completed.

To create a new issue, click the "New Issue" button and fill in the details of the task or feature. Be sure to include a clear and concise title, a description of the task or feature, and any relevant labels or milestones.

Once an issue has been created, it will be added to the list of open issues for the project. You can assign the issue to yourself or another contributor, and you can add comments and updates as you work on the task.

  
## Using Milestones as Goals

We use Github Milestones to track progress towards our project goals. Each milestone represents a major goal or deadline for the project.

To create a new milestone, go to the "Issues" tab and click the "Milestones" button. From there, you can create a new milestone and set a due date.

Once you have created a milestone, you can assign issues to it by adding the milestone label to the issue. This will help you track progress towards your goals and make sure that all tasks are completed on time.
