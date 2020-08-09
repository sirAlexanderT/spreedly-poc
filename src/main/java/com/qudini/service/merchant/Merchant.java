package com.qudini.service.merchant;

import com.qudini.service.persistence.core.GeneratedId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "merchant")
public class Merchant extends GeneratedId implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "name", columnDefinition = "VARCHAR(255)", nullable = false)
    private String name;

    @Column(name = "description", columnDefinition = "VARCHAR(355)", nullable = false)
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
