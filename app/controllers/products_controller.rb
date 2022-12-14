class ProductsController < ApplicationController
    
    def index
        products = Product.all
        render json: products
    end

    def post
        product = Product.new_product
        render json: product
      end

      def destroy
        product = Product.find(params[:id])
        product.destroy
        render json: product
      end

   end

   
