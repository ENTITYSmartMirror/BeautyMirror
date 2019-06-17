# -*- coding: utf-8 -*-
import datetime
import cv2

cap = cv2.VideoCapture(0)
cap.set(3,640)
cap.set(4,480)
ret, frame = cap.read()
#now = datetime.datetime.now().strftime("%d_%H-%M-%S")
now = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")

cv2.imshow('frame', frame)

cv2.imwrite('C:/BeautyM/modules/MMM-BeforeAfter/before/before2.png', frame)
cv2.imwrite("C:/BeautyM/modules/MMM-BeforeAfter/minsoo/" + str(now) + ".png", frame)

cap.release()
cv2.destroyAllWindows()
print(now)
