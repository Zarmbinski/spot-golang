FROM golang:1.15-stretch as builder

WORKDIR /app

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o spot .


FROM scratch

ENV NAME=Spot

WORKDIR /app

COPY --from=builder /app/spot .

EXPOSE 8080

CMD ["./spot"]
