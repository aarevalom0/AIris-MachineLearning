import cv2
from joblib import load
import numpy as np
from skimage.color import rgb2gray
from skimage.feature import hog
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
class AIrisModel:
    def __init__(self):
        self.model=load("./assets/modelo.joblib")
    def color_hist(self,Im,type_h,bins):
        
        if type_h=="concat":

            R=Im[:,:,0].flatten()
            G=Im[:,:,1].flatten()
            D=Im[:,:,2].flatten()

            h1,b1= np.histogram(R, bins=bins)
            h2,b2= np.histogram(G, bins=bins)
            h3,b3= np.histogram(D, bins=bins)

            concat_hist=np.concatenate((h1,h2,h3))
            concat_hist = concat_hist / np.sum(concat_hist)
            return concat_hist
        else:
            intensities = np.stack([Im[:, :, 0].flatten(),
                                Im[:, :, 1].flatten(),
                                Im[:, :, 2].flatten()], axis=1)
            joint_histogram, bins_grid = np.histogramdd(intensities, bins = bins)
            joint_histogram=joint_histogram.flatten()
            joint_histogram=joint_histogram/np.sum(joint_histogram)

            return joint_histogram


    def Color_pyramid(self,Im,size,type_h,bins):
        filas=size[0]
        columnas=size[0]
        h=[]

        for pf in range(int(Im.shape[0]/filas)):
            ima_fila=Im[pf*filas:(pf+1)*filas,:,:]
            for pc in range(int(Im.shape[1]/columnas)):
                ima_col=ima_fila[:,pc*columnas:(pc+1)*columnas,:]
                h.append(self.color_hist(ima_col,type_h,bins))

        H=np.concatenate(h)
        return H

    def color_shape(self,Im,bins,type_h,pyram,cell_size):

        if pyram:
            d_color = self.Color_pyramid(Im,cell_size,type_h,bins)
        else:
            d_color = self.color_hist(Im,type_h,bins)

        filas=int(Im.shape[0]/cell_size[0])
        columnas=int(Im.shape[0]/cell_size[1])

        hist_hog, hog_map = hog(rgb2gray(Im), orientations=16, pixels_per_cell=cell_size,
                            cells_per_block=(filas, columnas), visualize=True)


        desc_final = np.concatenate((d_color, hist_hog))


        return desc_final
    def make_prediction(self,image_path):
        image = cv2.imread(image_path)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        image = cv2.resize(image, (128,128))
        descriptor=self.color_shape(image,10,"concat",True,(16,16))
        predicion=self.model.predict([descriptor])[0]
        if predicion==0:
            Recomendacion="No se han detectado signos de glaucoma. Recuerda que los exámenes periódicos son clave para la prevención."
        else:
            Recomendacion="Los resultados sugieren la posibilidad de glaucoma. Te recomendamos consultar a un especialista para una evaluación más detallada."
        return {"Recomendacion":Recomendacion,"Probabilidad":str(round(self.model.predict_proba([descriptor])[0][predicion]*100,2))+"%"}