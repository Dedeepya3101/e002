package com.klef.fsad.exam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsad.exam.model.Booking;
import com.klef.fsad.exam.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    public Booking addBooking(Booking booking) {
        return repository.save(booking);
    }

    public String deleteBooking(Integer id) {
        repository.deleteById(id);
        return "Booking Deleted Successfully";
    }
}