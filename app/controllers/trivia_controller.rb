class TriviaController < ApplicationController
  # GET /trivia
  # GET /trivia.json
  def index
    @trivia = Trivium.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @trivia }
    end
  end

  # GET /trivia/1
  # GET /trivia/1.json
  def show
    @trivium = Trivium.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @trivium }
    end
  end

  # GET /trivia/new
  # GET /trivia/new.json
  def new
    @trivium = Trivium.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @trivium }
    end
  end

  # GET /trivia/1/edit
  def edit
    @trivium = Trivium.find(params[:id])
  end

  # POST /trivia
  # POST /trivia.json
  def create
    @trivium = Trivium.new(params[:trivium])

    respond_to do |format|
      if @trivium.save
        format.html { redirect_to @trivium, notice: 'Trivium was successfully created.' }
        format.json { render json: @trivium, status: :created, location: @trivium }
      else
        format.html { render action: "new" }
        format.json { render json: @trivium.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /trivia/1
  # PUT /trivia/1.json
  def update
    @trivium = Trivium.find(params[:id])

    respond_to do |format|
      if @trivium.update_attributes(params[:trivium])
        format.html { redirect_to @trivium, notice: 'Trivium was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @trivium.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trivia/1
  # DELETE /trivia/1.json
  def destroy
    @trivium = Trivium.find(params[:id])
    @trivium.destroy

    respond_to do |format|
      format.html { redirect_to trivia_url }
      format.json { head :no_content }
    end
  end
end
