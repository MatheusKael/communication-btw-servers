package main

import (
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	routes := gin.Default()

	routes.POST("/", func(ctx *gin.Context) {

		bytes, err := io.ReadAll(ctx.Request.Body)

		if err != nil {
			return
		}

		fmt.Println(string(bytes))

		ctx.JSON(http.StatusOK, gin.H{
			"message": "it's on",
		})

	})

	routes.Run(":8080")

}
