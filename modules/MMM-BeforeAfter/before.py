# -*- coding: utf-8 -*-
import datetime
import cv2

cap = cv2.VideoCapture(0)
cap.set(3,640)
cap.set(4,480)
ret, frame = cap.read()
now = datetime.datetime.now().strftime("%d_%H-%M-%S")
cv2.imshow('frame', frame)
cv2.imwrite('/home/pi/BeautyM/modules/MMM-BeforeAfter/before/before.jpg', frame)

cap.release()
cv2.destroyAllWindows()
print("python success !")

