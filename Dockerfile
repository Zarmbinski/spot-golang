FROM golang as builder

WORKDIR /app

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o spot .


FROM alpine

ENV NAME=Spot

WORKDIR /app

COPY --from=builder /app/spot .

CMD ["./spot"]
