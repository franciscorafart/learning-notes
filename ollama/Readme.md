## Run model
1. `ollama serve`
2. `ollama run <model_name>`

# Stop model
Run `pgrep ollama`to find the process
Run `sudo kill <process_number>` to stop ollama
=>  In Mint / Ubuntu it restarts the process immediately.

### Stop in Mint / Ubuntu 
`sudo service ollama stop`

### Run on Docker
CPU only
`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`

Nvidia GPU
Install the Nvidia container toolkit.
Run Ollama inside a Docker container
`docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`

Run a model
Now you can run a model like Llama 2 inside the container.

`docker exec -it ollama ollama run llama2`
