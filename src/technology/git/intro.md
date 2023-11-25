---
title: 简介
icon: ppmb icon-xiangmujianjie
category:
  - Git
tag:
  - 实用技术
  - 简介
order: 1
isOriginal: true
---

## 简介

Git是一种分布式版本控制系统，它可以记录文件的历史版本，以便您在不同版本之间进行比较、合并和恢复。Git最初由Linus Torvalds开发，用于管理Linux内核的开发。Git的设计理念是去中心化、可靠性和可扩展性。

Git的主要优点包括分布式版本控制、可靠性、可扩展性、灵活性和速度。Git还可以与许多其他工具和平台集成，例如GitHub、GitLab、Bitbucket等。Git是目前最流行的版本控制系统之一，被广泛应用于软件开发、团队协作、文件管理和版本控制等领域。

### Git和Svn

1. Git是分布式的。
2. Git按元数据方式存储，Svn是按照文件。
3. Git和Svn的分支不同。
4. Git没有全局的版本号。
5. Git完整性优于Svn。

![两者区别](https://www.runoob.com/wp-content/uploads/2015/02/0D32F290-80B0-4EA4-9836-CA58E22569B3.jpg)

## 安装

### Windows的安装


1. 下载 Git。您可以在 Git 的官方网站（[https://git-scm.com/downloads](https://git-scm.com/downloads)）上下载适用于 Windows 的版本。
2. 安装 Git。双击下载的 .exe 文件，按照安装向导的提示完成安装。在安装过程中，您可以选择自定义安装 Git 的位置和其他选项。
3. 配置 Git。在命令行中输入 `git config --global user.name "Your Name"` 和 `git config --global user.email "your_email@example.com"`，分别设置您的用户名和电子邮件地址。
4. 使用 Git。在命令行中输入 `git --version` 查看 Git 是否已经成功安装。接下来，您可以使用 Git 的命令来进行版本控制、分支管理等操作。

### Linux安装

Linux一般的发行版会自带有。

## 配置   

```sh
git config --global user.name "test"
git config --global user.email test@test.com
```

## 工作流程

1. 初始化代码库：在项目文件夹中创建一个新的 Git 仓库。
2. 创建分支：为了更好地组织代码，我们通常会创建多个分支。使用 "git branch" 命令可以创建新的分支，例如 "git branch new-feature"。
3. 切换分支：使用 "git checkout" 命令可以切换到其他分支，例如 "git checkout new-feature"。
4. 提交更改：当您对文件进行更改时，请使用 "git add" 命令将更改添加到暂存区。然后使用 "git commit" 命令提交更改，并指定提交消息。例如： "git add file.txt" 和 "git commit -m 'update file.txt'"。
5. 推送更改：使用 "git push" 命令将本地更改推送到远程仓库。如果尚未连接到远程仓库，则需要使用 "git remote add" 命令连接。
6. 拉取更改：使用 "git pull" 命令从远程仓库拉取最新更改。如果需要，还可以使用 "git merge" 命令合并远程更改。
7. 解决冲突：当多个人同时修改同一文件时，可能会出现冲突。在这种情况下，您需要使用 "git status" 命令检查哪些文件发生了冲突。然后使用 "git merge --continue" 命令解决冲突。
8. 删除文件：使用 "git rm" 命令可以删除文件，并将其从 Git 仓库中删除。
9. 撤销更改：如果您意外地提交了错误的更改，可以使用 "git revert" 命令撤销更改。这将创建一个新的更改记录，撤销最近的提交。
10. 恢复更改：如果您不小心将更改从 Git 仓库中删除，可以使用 "git checkout" 命令恢复更改。

## 基本概念

工作区是

![关系](https://www.runoob.com/wp-content/uploads/2015/02/1352126739_7909.jpg)

<Share colorful />