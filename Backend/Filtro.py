import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image
import joblib
import numpy as np
import joblib

class Filtro:
    def __init__(self):
        self.model = joblib.load("./assets/filtro.joblib")
        self.resnet = models.resnet18(pretrained=True)
        self.resnet = nn.Sequential(*list(self.resnet.children())[:-1]) 
        self.resnet.eval()
        self.transform = transforms.Compose([
                transforms.Resize((224, 224)),
                transforms.ToTensor()
            ])
        
        
    def filtrar(self, image_path):
        img = Image.open(image_path).convert("RGB")
        img_tensor = self.transform(img).unsqueeze(0)
        with torch.no_grad():
            features = self.resnet(img_tensor)
            features = features.view(1, -1).cpu().numpy()
        pred = self.model.predict(features)[0]
        print(f"Predicción del filtro: {pred}")
        return pred