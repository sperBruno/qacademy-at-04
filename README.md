# qacademy-at-04

#GIT COMMANDS

> git config --global user.name

> git config --globar user.email

> git init

> git add

> git status

> git commit

> git commit -m ""

> git log

#Add Origin

> git remote add origin <url - ssh>

> git remote -v

> git push origin <branch name>

> git pull origin <branch name>

> git fetch

> git checkout -b <branch name>

> git checkout <branch name>

#Revert

> git revert <id of commit>

#Reset

> git reset --hard <id of commit>

#Tools
*git bash
*smartgit
\*sourcetree

#Practice

1. Create branch
2. Add your name to the readme file after collaborator title
3. Create PR
   Solution:
4. git clone https://github.com/sperBruno/qacademy-at-04.git
5. cd qacademy-at-04
   2.1 git checkout -b AT-Miguel
6. cat README.md (ver lista)
7. nano README.md or abrir con editor de texto
8. En la seccion de colaboradores agrego mi nombre y mi correo, guardo cambios
9. git status
10. git add .
11. git commit -m "Added my name Miguel"
12. git push origin AT-Miguel
13. Crear el PR en github donde mi base es main y mi branch es lo que voy a merger
    #Collaborators
    Bruno Barrios (blbarrios@outlook.com)
    Nelson Morante (nelson.morante.nina.07@gmail.com)
