FROM golang as builder

WORKDIR /app

COPY main.go .

CMD ["go" "run" "main.go"]