import requests
import matplotlib.pyplot as plt
from PIL import Image
from matplotlib import patches
from io import BytesIO
import os
import cv2

cap = cv2.VideoCapture(0)

ret, frame = cap.read()
cv2.imwrite('C:/BeautyM/modules/MMM-Testpython/CognitiveFace/CognitiveFace.jpg', frame)

cap.release()
cv2.destroyAllWindows()

subscription_key = "62114331d85f48c99c133b2ac9027967"

image_path = os.path.join('C:/BeautyM/modules/MMM-Testpython/CognitiveFace/CognitiveFace.jpg')

assert subscription_key

#face_api_url = 'https://magicmirror.cognitiveservices.azure.com/face/v1.0/detect'
#face_api_url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect'
face_api_url = 'https://pay.cognitiveservices.azure.com/face/v1.0/detect'

image_data = open(image_path, "rb")

headers = {'Content-Type': 'application/octet-stream',
           'Ocp-Apim-Subscription-Key': subscription_key}
params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
    'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
}

response = requests.post(face_api_url, params=params, headers=headers, data=image_data)
response.raise_for_status()
faces = response.json()

image_read = open(image_path, "rb").read()
image = Image.open(BytesIO(image_read))

plt.figure(figsize=(8, 8))
ax = plt.imshow(image, alpha=1)

try:
    for face in faces:
        fr = face["faceRectangle"]
        fa = face["faceAttributes"]
        origin = (fr["left"], fr["top"])
        p = patches.Rectangle(
            origin, fr["width"], fr["height"], fill=False, linewidth=2, color='dodgerblue')
        ax.axes.add_patch(p)
        plt.text(origin[0], origin[1], "%s, %d"%(fa["gender"].capitalize(), fa["age"]),
                 fontsize=20, weight="bold", va="bottom", color='dodgerblue')
    _ = plt.axis("off")
    fig = plt.gcf()
    fig.savefig('C:/BeautyM/modules/MMM-Testpython/CognitiveFace/CognitiveFace.jpg')
    print(fa["gender"])
    print(fa["age"])
except Exception as e:
    print("notFind")