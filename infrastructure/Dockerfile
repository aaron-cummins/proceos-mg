FROM python:3.8-buster
LABEL maintainer "cristian.reyesf@cummins.cl"

EXPOSE 80
WORKDIR /app
COPY ./project/frontend/requirements/requirements.txt /app
#/app/requirements.txt
COPY ./project/frontend/src /app
RUN pip3 install -r requirements.txt
#RUN pip3 install pandas
#RUN pip3 install psycopg2
#RUN pip3 install requests
#RUN pip3 install numpy
#RUN pip3 install boto3
#ENTRYPOINT ["python3"]
CMD ["python3", "index.py"]
#CMD ["python3", "server.py"]
