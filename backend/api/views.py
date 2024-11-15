from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer,NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):#it will list all of the notes  that user has created 
    serializer_class=NoteSerializer
    permission_classes=[IsAuthenticated]#you cant use this class until you are authenticated and have  valid jwt token 
    def get_queryset(self):
        user=self.request.user
        return Note.objects.filter(author=user)#it will show the notes only which are written by you 
    def perform_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)
class NoteDelete(generics.DestroyAPIView):
    
    serializer_class=NoteSerializer
    permission_classes=[IsAuthenticated]
    def get_queryset(self):
        user=self.request.user
        return Note.objects.filter(author=user)
    

    
class CreateUserView(generics.CreateAPIView):#automatically handle create new user or new object forms
    queryset=User.objects.all() #checks and dont create a user again which is already exists 
    serializer_class=UserSerializer #to take every data to make a user
    permission_classes=[AllowAny] #allow any user to make account even they are not authenticated to the organisation

