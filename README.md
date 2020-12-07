# Curso BOOTSTRAP

Formas de interactuar con git

-0.5) ssh-keygen (en terminal para genera el par de llaves. Copiar la llave publica y pegarla en la configuracion del usuario en Github)
0) crear la carpeta que se va a vincular con el repositorio de git y ejecutar la terminal desde ahí
0.1) git config user.name <nombre>
0.2) git config user.email <email>

Primera forma:
1) git clone "colocar ssh"

Segunda forma:
1) git init
2) git remote add origin "colocar url o ssh"
3) git pull origin <branch> (por defecto el branch inicial es 'main')
