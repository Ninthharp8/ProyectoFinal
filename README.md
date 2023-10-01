# Git Comandos Básicos

## Iniciar un Repositorio
`git init` Inicia un nuevo repositorio Git en el directorio actual.

`git clone <URL>` Clona un repositorio existente en tu directorio local.

## Realizar Cambios
`git add <archivo>` Agrega un archivo al área de preparación para el próximo commit.

`git commit -m "Mensaje del commit"` Crea un nuevo commit con los cambios en el área de preparación.

## Revisar Cambios y Estado
`git status` Muestra el estado de los cambios según el área de trabajo y el área de preparación.


`git diff` Muestra las diferencias entre los cambios en el área de preparación y los cambios sin preparar.

## Sincronizar Cambios
`git pull` Obtiene cambios desde un repositorio remoto y los fusiona en la rama actual.

`git push origin <rama>` Sube los cambios de la rama actual al repositorio remoto.

## Ramas
`git branch`  Muestra todas las ramas en el repositorio local.

`git checkout <rama>` Cambia a otra rama existente.

`git checkout -b <nombre-rama>` Crea una nueva rama y se cambia a ella.

`git merge <rama>` Fusiona los cambios de otra rama en la rama actual.

## Historial
`git log` Muestra el historial de commits en la rama actual.

`git log --oneline` Muestra el historial de commits en una línea por commit.
