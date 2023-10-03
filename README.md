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

## GIT REMOTE

`git remote add <nombre> <url>`: Agrega un nuevo repositorio remoto con un nombre especificado. Por ejemplo, git remote add origin https://ejemplo.com/repo.git.

`git remote remove <nombre>`: Elimina el repositorio remoto especificado.

`git remote rename <nombre_antiguo> <nombre_nuevo>`: Cambia el nombre del repositorio remoto.

`git remote -v o git remote --verbose`: Muestra los nombres y las URL de los repositorios remotos configurados.

`git remote show <nombre>`: Muestra información detallada sobre un repositorio remoto en particular.

`git remote update`: Actualiza la información remota. Descarga todos los datos del repositorio remoto, pero no fusiona ninguno de los cambios en tu rama local.

`git remote prune <nombre>`: Elimina las referencias a ramas eliminadas en el repositorio remoto.

`git remote set-url <nombre> <nueva_url>`: Cambia la URL del repositorio remoto.

`git remote get-url <nombre>`: Obtiene la URL de un repositorio remoto.

`git remote show origin` : Muestra información específica sobre el repositorio remoto llamado "origin".
