FROM rocker/r-ver:4.0.4
WORKDIR /app

RUN apt-get update -qq && apt-get install -y \
      libssl-dev \
      libcurl4-gnutls-dev
RUN R -e "install.packages('plumber')"

COPY / ./
EXPOSE 80
CMD Rscript main.R