package
        com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @SuppressWarnings("all")
	    @Entity
	    @Table(name = "personas", schema = "application")
public class Persona {
	public Persona(){}
	@Id
	@Column(name = "id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "name")
private String name;

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}
@Column(name = "password")
private String password;

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}
@Column(name = "role")
private String role;

public String getRole() {
return role;
}

public void setRole(String role) {
this.role = role;
}
@Column(name = "edad")
private Integer edad;

public Integer getEdad() {
return edad;
}

public void setEdad(Integer edad) {
this.edad = edad;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "avanceJuego", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.AvanceJuego> avancesJuegos =new java.util.ArrayList<com.example.model.AvanceJuego>();
			public java.util.List<com.example.model.AvanceJuego> getAvancesJuegos() {
			return avancesJuegos;
			}
			public void setAvancesJuegos(java.util.List<com.example.model.AvanceJuego> avancesJuegos) {
			this.avancesJuegos = avancesJuegos;
			}
			@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "diagnostico", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.Diagnostico> diagnosticos =new java.util.ArrayList<com.example.model.Diagnostico>();
			public java.util.List<com.example.model.Diagnostico> getDiagnosticos() {
				return diagnosticos;
			}
			public void setDiagnosticos(java.util.ArrayList<com.example.model.Diagnostico> diagnosticos) {
				this.diagnosticos = diagnosticos;
			}
        }
